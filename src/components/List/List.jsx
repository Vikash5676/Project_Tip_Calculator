import style from './List.module.css';

const List = ({list}) => {

const listItems = list.map((item,index)=>{
        return(
            <li key={index}>{item}</li>
        );
});

    return (
        <div className={style.contain}>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default List;