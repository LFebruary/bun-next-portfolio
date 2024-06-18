import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // try {
    //     const response = await fetch('https://api.github.com/users/lfebruary/repos');

    //     if (!response.ok) {
    //         throw new Error(`GitHub API responded with status: ${response.status}`);
    //     }

    //     const data = await response.json();

    //     res.status(200).json(data);
    // } catch (error) {
    //     res.status(500).json({ error: error });
    // }
}