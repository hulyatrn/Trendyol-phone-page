import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { RiCoupon2Line } from "react-icons/ri";

function Navbar() {
  const lastScroll = 0;
  const isScrolled = false;

  window.addEventListener("scroll", function () {
    const topHeader = document.querySelector(".topheader");
    const currentScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollDirection = currentScroll < lastScroll;
    const shouldToggle = isScrolled && scrollDirection;
    isScrolled = currentScroll > 100;
    topHeader.classList.toggle("active", shouldToggle);
    lastScroll = currentScroll;
  });

  return (
    <header className="header" data-scroll>
      <div className="nav-component-search">
        <div className="left-icon">
          <span>
            <BsArrowLeft />
          </span>
        </div>
        <div className="title-group">
          <div>
            <h1>Akıllı Cep Telefonu</h1>
            <h5>1340 Ürün Listeleniyor</h5>
          </div>
        </div>
      </div>
      <div class="topheader">
        <nav>
          <div className="nav-component-filter">
            <div className="filter-box-wrapper-filter">
              <span>
                <TbArrowsSort className="arrowsort-icon" />
              </span>
              <span className="filter-title">Filtrele</span>
            </div>
            <div className="filter-box-wrapper">
              <span>
                <TbArrowsSort className="arrowsort-icon" />
              </span>
              <span className="filter-title">Sırala</span>
            </div>
          </div>
          <div className="open-filters">
            <div className="open-filters-menu">
              <div className="open-filters-title">
                <h5>Marka</h5>
                <AiOutlineDown className="down-icon" />
              </div>
              <div className="open-filters-title">
                <RiCoupon2Line className="coupon-icon" />
                <h5>Kuponlu Ürünler</h5>
              </div>
              <div className="open-filters-title">
                <BsTruck className="truck-icon" />
                <h5>Hızlı Teslimat</h5>
              </div>
              <div className="open-filters-title">
                <h5>Yıldızlı Ürünler</h5>
                <AiOutlineDown className="down-icon" />
              </div>
              <div className="open-filters-title">
                <h5>Fiyat</h5>
                <AiOutlineDown className="down-icon" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
