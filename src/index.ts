import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify([]));
}

app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    submissions.push(newSubmission);
    fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));

    res.json({ success: true });
});

app.get('/read', (req: Request, res: Response) => {
    const { index } = req.query;
  
    if (index === undefined || isNaN(Number(index))) {
      return res.status(400).json({ error: 'Index query parameter is required and must be a number' });
    }
  
    const submissions = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    const submissionIndex = Number(index);
  
    if (submissionIndex < 0 || submissionIndex >= submissions.length) {
      return res.status(404).json({ error: 'Submission not found' });
    }
  
    res.json(submissions[submissionIndex]);
  });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});