import { Skeleton } from "@chakra-ui/react";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { FaChartSimple, FaRegRectangleList, FaUser } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import React from "react";

export default function DashboardComponent() {
    return (
        <div id="dashboard" className="dashboard main__grid">
            <div id="sidebar" className="dashboard__sidebar">
                <div className="sidebar__icon">
                    <TbLayoutSidebarLeftExpandFilled />
                </div>
                <div className="sidebar__logo">
                    <Skeleton height="40px" width="100%" />
                </div>
                <div className="sidebar__menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <div className="menu__submenu">
                                <FaRegRectangleList />
                                <p className="menu__text">사업관리</p>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__submenu">
                                <FaRegBuilding />
                                <p className="menu__text">기업관리</p>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div className="menu__submenu">
                                <FaUser />
                                <p className="menu__text">계정관리</p>
                            </div>
                        </li>
                        <li className="menu__item active">
                            <div className="menu__submenu">
                                <FaChartSimple />
                                <p className="menu__text">통계관리</p>
                            </div>
                            <div className="menu__item--active"></div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__profile">
                    <div className="profile__avatar">
                        <FaUser />
                    </div>
                    <div id="profileInfo" className="profile__info">
                        <p className="profile__name">에이비씨디에프</p>
                        <p className="profile__id">abcdefg</p>
                    </div>
                </div>
            </div>
            <div id="main" className="dashboard__main">
                <div className="main__title">
                    <p className="title__text">통계관리</p>
                    <div className="title-btn__box">
                        <button className="excel__btn" id="excelBtn">
                            보고서 다운로드
                        </button>
                        <button className="graph__btn" id="graphBtn">
                            그래프 조회
                        </button>
                    </div>
                </div>
                <div className="main__filter">
                    <form id="categoryFilterForm" className="filter__form">
                        <div className="form__group">
                            <label className="form__label" htmlFor="searchYear">
                                조회 연도
                            </label>
                            <select name="searchYear" id="searchYear"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="bsnGubun">
                                지역산업맞춤형 사업구분
                            </label>
                            <select name="bsnGubun" id="bsnGubun"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="bsnType">
                                사업유형
                            </label>
                            <select name="bsnType" id="bsnType"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="agency">
                                수행기관
                            </label>
                            <select name="agency" id="agency"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="enterprise">
                                기업
                            </label>
                            <select name="enterprise" id="enterprise"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="project">
                                프로젝트
                            </label>
                            <select name="project" id="project"></select>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="detailBsn">
                                세부사업
                            </label>
                            <select name="detailBsn" id="detailBsn"></select>
                        </div>
                    </form>
                    <button type="button" className="filter__btn" id="filterBtn">
                        검색
                    </button>
                </div>
                <div className="main__contents">
                    <div className="condition-container">
                        <div className="condition-container__header">
                            <Skeleton height="150px" width="100%" />
                        </div>
                        <div className="condition-container__body">
                            <div className="condition-container__left">
                                <div className="condition-container__section">
                                    <Skeleton height="250px" width="100%" />
                                </div>
                                <div className="condition-container__section">
                                    <Skeleton height="250px" width="100%" />
                                </div>
                            </div>
                            <div className="condition-container__right">
                                <div className="condition-container__section">
                                    <Skeleton height="100%" width="100%" />
                                </div>
                                <div className="condition-container__section">
                                    <Skeleton height="100%" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__menu">
                        <button
                            type="button"
                            id="profileAuthBtn"
                            className="menu__auth option__btn"
                        >
                            <i></i>
                            계정 전환
                        </button>
                        <button
                            type="button"
                            id="profileHomeBtn"
                            className="menu__home option__btn"
                        >
                            <i></i>
                            메인 화면
                        </button>
                        <button
                            type="button"
                            id="profileLogoutBtn"
                            className="menu__logout option__btn"
                        >
                            <i></i>
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
