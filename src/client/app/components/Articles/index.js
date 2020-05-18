import React from 'react'
import Icon_cart from '../../../img/add-to-cart.svg'

const Articles = ({ items, groups, exchange }) => {

    function roundCost(cost) {
        return Math.round(cost * 100) / 100;
    }

  return (
    <section className="article-container">
        {groups.map((group_name, index) => { 
            const article_list = items.filter(article => article.group === group_name)
            return(
                <div className="article-container__category" key={`ac-${index}`}>
                    <input id={`ac-${index}`} name="accordion-1" type="checkbox"  defaultChecked/>
                    <label className="articles" htmlFor={`ac-${index}`}>
                        <span className="articles__title">{group_name}</span>
                    </label>
                    <div className="article-list">
                        {article_list.map(item => (
                            <article className="article-list__container" key={`art_${item.id}`}>
                                <div className="article-list__container__name">{`${item.name} (${item.rest})`}</div>
                                <div className="article-list__container__cost">{`${roundCost(item.price_USD * exchange.cost)} ₽`}</div>
                                <div className="article-list__container__add"><a className="add-to-cart-link" href="#"><Icon_cart /></a></div>
                            </article>
                        ))}
                    </div>
                </div>
            
            )}
        )}
    </section>
  )
}

export default Articles;
