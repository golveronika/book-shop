import React from 'react'
import Icon_cart from '../../../img/add-to-cart.svg'

const Articles = () => {

  return (

    <section className="article-container">



    <div className="article-container__category">
        <input id="ac-1" name="accordion-1" type="checkbox"  checked/>
        <label className="articles" for="ac-1">
            <span className="articles__title">Книги</span>
        </label>

        <div className="article-list">
            
            <article className="article-list__container">
                <div className="article-list__container__name">Алгоритмы. Построение и анализ. Т. Кортмен, Ч. Лейсон, К. Штайн (4)</div>
                <div className="article-list__container__cost">30 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>

            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>

        </div>

    </div>

    <div className="article-container__category">
        <input id="ac-2" name="accordion-1" type="checkbox"  />

        <label className="articles" for="ac-2">
            <span className="articles__title">Спорт</span>
        
        </label>


        <div className="article-list">


        <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>


        </div>
    </div>


    <div className="article-container__category">
        <input id="ac-3" name="accordion-1" type="checkbox"  />

        <label className="articles" for="ac-3">
            <span className="articles__title">Сантехника</span>
        
        </label>


        <div className="article-list">


        <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>
            <article className="article-list__container">
                <div className="article-list__container__name">Совершенный код. Стив Макгонагал (2)</div>
                <div className="article-list__container__cost">2 056,5 ₽</div>
                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
            </article>


        </div>
    </div>
  




    </section>

  );
}

export default Articles;
