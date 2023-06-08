import next from "next/types";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { setCookie } from 'cookie'


const handler = (req:NextApiRequest, res:NextApiResponse) => {

    setCookie(res, 'Next.js', 'api-middleware!', {path:'/', maxAge: '2592000'})

    res.end(res.getHeader('Set-Cookie'))
  }

export default handler