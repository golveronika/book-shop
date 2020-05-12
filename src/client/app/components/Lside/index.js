import React from 'react'

const Lside = () => {

  return (
    <aside className="section-left">
        <div className="container">
            <div className="excanche">
                <span className="excanche__text">1$ = 58,43₽</span>
                {/* <div className="excanche__triangle-up"></div> */}
                <div className="excanche__triangle-down"></div>
            </div>

            <div className="filter">
                <span className="filter__title">Категории</span>
                <div className="filter__params">

                    <label className="custom-checkbox">
                        <input type="checkbox" value="value-1" checked/>
                        <span>Все</span>
                    </label>
                    <label className="custom-checkbox">
                        <input type="checkbox" value="value-1" />
                        <span>Книги</span>
                    </label>
                    <label className="custom-checkbox">
                        <input type="checkbox" value="value-1" />
                        <span>Запчасти для машин</span>
                    </label>
                    <label className="custom-checkbox">
                        <input type="checkbox" value="value-1" />
                        <span>Спорт</span>
                    </label>


                </div>

            </div>



        </div>
    </aside>
  );
}

export default Lside;
