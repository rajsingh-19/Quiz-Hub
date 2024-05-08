import React from 'react'
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className='flex dir-row items-center text4 p10 height-10 b-0 footer-bg text-primary-color'>
        <div className='width-30 flex justify-center items-center'><span>&copy;</span>2024 Quiz Hub, Inc. All rights reserved</div>
        <div className='width-40 flex justify-center items-center'>
          <span>Made with</span><FcLike className='m-r5 m-l5' /><span>by  Raj Singh</span>
        </div>
        <div className='width-30'>
            <ul className='flex dir-row items-center justify'>
                <li className='p-l10 sociallink p8'><a href="https://www.github.com/rajsingh-19" target='_blank'>Github</a></li>
                <li className='p-l10 sociallink p8'><a href="https://www.twitter.com/raj_singh_19" target='_blank'>Twitter</a></li>
                <li className='p-l10 sociallink p8'><a href="https://www.instagram.com" target='_blank'>Instagram</a></li>
                <li className='p-l10 sociallink p8'><a href="https://www.facebook.com" target='_blank'>Facebook</a></li>
                <li className='p-l10 sociallink p8'><a href="https://www.youtube.com" target='_blank'>Youtube</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;
