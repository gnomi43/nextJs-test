import  MainItem  from "./mainItem";

const MainList = () =>{

    const setDropdown = (event: any) : void => {

        const btnDropdown = event.target;
        const parentDropdown = btnDropdown.closest(".main__content-header");

        if(event.target.classList.contains("btn-dropdown--open")){
            event.target.classList.remove("btn-dropdown--open");
            parentDropdown.classList.add("dropdown");
        } else {
            event.target.classList.add("btn-dropdown--open");
            parentDropdown.classList.remove("dropdown");
        };
    };

    const objData: object = {
                    "Общая информация" : {
                                            "Документ" : "Профиль требований к должности",
                                            "Должность" : "Инженер",
                                            "Функциональное направление" : "Логистика",
                                            "Специализация" : "Обслуживание и ремонт механического, энергетического и электрооборудования",
                                        },

                        "Образование" : {
                                            "Степень" : "Высшее/Среднее высшее",
                                            "Специализация" : "Инженерно-техническая",
                                        },

            "Корпоративные компетенции" : {
                                            "Сотруднечество" : "1",
                                            "Коммуникации и убеждения" : "2",
                                            "Достижение результата" : "3",
                                            "Системное мышление" : "3",
                                            "Культура безопасности" : "2",
                                            "Сoтруднечество" : "1",
                                        },
                    };


    const transferData: Function = (data: object) =>{
        let arrObjects = [];
        for (let keyItem in data) {
            arrObjects.push(<MainItem key={keyItem} setDropdown={setDropdown} objName={keyItem} objData = {data[keyItem]} />)
        };
        return(arrObjects);
    };

    const isEmptyObject: Function = (dataCheck: object) => {
        if(Object.entries(dataCheck).length === 0){
            return true;
        } else {
            return false;
        }
    };

    const renderItem: any = !isEmptyObject(objData) ? transferData(objData): <p>Data available.</p>;


    return(
        <div className="main__wrapper container">
            <div className="main__header">
                <p className="main__header-title">Свойства</p>
                <p className="main__header-title">Значение</p>
            </div>
            
            {renderItem}

            <div className="main__content">
                <div className="main__content-header">
                    <p className="main__content-title">Дополнительные требования</p>
                    <div onClick={setDropdown} className="main__content-dropdown btn-dropdown btn-dropdown--open"></div>
                </div>
                <div className="main__content-wrapper">
                    <ul className="main__content-list-key">
                        <li className="main__content-item key-item">
                            <p className="main__content-title-key">Инструменты</p>
                            <ul className="main__content-list">
                                <li className="main__content-item key-item">SAP ERP</li>
                                <li className="main__content-item key-item">SAP HR</li>
                            </ul>
                        </li>
                        <li className="main__content-item key-item">
                            <p className="main__content-title-key">Иностранные языки</p>
                            <ul className="main__content-list-key">
                                <li className="main__content-item key-item">Английский</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="main__content-list-value dop-dropdown">
                        <li className="main__content-item" style={{minHeight: 75}}>
                            <div className="main__content-header">
                                <p className="main__content-title"></p>
                                <div onClick={setDropdown} className="main__content-dropdown btn-dropdown btn-dropdown--open"></div>
                            </div>
                            <div className="main__content-wrapper">
                                <ul className="main__content-list-value">
                                    <li className="main__content-item">
                                        <ul className="value-item__list">
                                            <li className="main__content-item value-item">Продвинутый уровень</li>
                                            <li className="main__content-item value-item">Продвинутый уровень</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="main__content-item">
                            <div className="main__content-header">
                                <p className="main__content-title"></p>
                                <div onClick={setDropdown} className="main__content-dropdown btn-dropdown btn-dropdown--open"></div>
                            </div>
                            <div className="main__content-wrapper">
                                <ul className="main__content-list-value">
                                    <li className="main__content-item">
                                        <ul className="value-item__list">
                                            <li className="main__content-item value-item">Продвинутый уровень</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MainList;