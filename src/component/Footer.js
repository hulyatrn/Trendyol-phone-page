import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";


function Footer() {
  return (
    <footer>
      <div>
        <span>
        <AiFillHome/>
        </span>
        <h6>Anasayfa</h6>
      </div>
      <div>
      <span>
        <BsTruck/>
        </span>
        <h6>Trendyol Go</h6>
      </div>
      <div>
        <span>
        <MdFavoriteBorder/>
        </span>
        <h6>Favorilerim</h6>
      </div>
      <div>
        <span>
          <SlBasket/>
          </span>
        <h6>Sepetim</h6>
      </div>
      <div>
        <span>
        <AiOutlineUser/>
        </span>
        <h6>Hesabım</h6>
      </div>
    </footer>
  )
}

export default Footer