const MainItem = ({objData, objName, setDropdown}) => {

    const renderKey = (data: object) =>{
        let arrKey = [];

        for (let key in data) {
            arrKey.push(<li key={key} className="main__content-item key-item">{key}</li>);
        };

        return arrKey;
    };

    const renderValue = (data: object) =>{
        let arrValue = [];

        for (let key in data) {
            arrValue.push(<li key={key} className={`main__content-item ${data[key] && "value-item"}`}>{data[key]}</li>);
        };

        return arrValue;
    };

    return(
        <>
            <div className="main__content">
                <div className="main__content-header">
                    <p className="main__content-title">{objName}</p>
                    <div onClick={setDropdown} className="main__content-dropdown btn-dropdown btn-dropdown--open"></div>
                </div>
                <div className="main__content-wrapper">
                    <ul className="main__content-list-key">
                        {renderKey(objData)}
                    </ul>
                    <ul className="main__content-list-value">
                        {renderValue(objData)}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default MainItem;