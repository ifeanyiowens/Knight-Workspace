// Vercel serverless function.
// Receives the "Submit Your Systems Requirements" form data from the Contact
// page and creates a new page in the Notion database, using credentials that
// are only ever stored server-side as environment variables, never in the
// client bundle.

const TEAM_SIZE_LABELS = {
  '1-5': '1 - 5 Team Members',
  '6-15': '6 - 15 Team Members',
  '16-35': '16 - 35 Team Members',
  '35+': '35+ Enterprise',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID environment variable');
    return res.status(500).json({ error: 'Server is not configured yet.' });
  }

  try {
    const body = req.body || {};
    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const company = (body.company || '').toString().trim();
    const teamSize = (body.teamSize || '').toString().trim();
    const bottleneck = (body.bottleneck || '').toString().trim();
    const stack = Array.isArray(body.stack) ? body.stack : [];

    if (!name || !email || !bottleneck) {
      return res.status(400).json({ error: 'Name, email, and bottleneck are required.' });
    }

    const properties = {
      Name: { title: [{ text: { content: name.slice(0, 2000) } }] },
      'Work Email': { rich_text: [{ text: { content: email.slice(0, 2000) } }] },
      'Operational Bottleneck': { rich_text: [{ text: { content: bottleneck.slice(0, 2000) } }] },
    };

    if (company) {
      properties['Company Name'] = { rich_text: [{ text: { content: company.slice(0, 2000) } }] };
    }

    if (teamSize) {
      properties['Team Size'] = { select: { name: TEAM_SIZE_LABELS[teamSize] || teamSize } };
    }

    if (stack.length > 0) {
      properties['Tools In Stack'] = { multi_select: stack.map((tool) => ({ name: String(tool).slice(0, 100) })) };
    }

    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties,
      }),
    });

    if (!notionResponse.ok) {
      const errorText = await notionResponse.text();
      console.error('Notion API error:', notionResponse.status, errorText);
      return res.status(502).json({ error: 'Could not save your submission. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('submit-brief handler error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
