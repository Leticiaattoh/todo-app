const TodoTile = ({ title }) => {
    return (
        <div className="flex border-[10px]">
        <input type="checkbox" />
        {/* props, the title in the p is a placeholder. you put the same value of title into the function */}
        <p>{title}</p>   
        </div>
    );
}



export default TodoTile;