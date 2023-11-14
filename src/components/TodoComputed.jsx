const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="dark:bg-gray-800 px-4 py-4 flex justify-between bg-white rounded-b-md transition-all duration-500">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        {" "}
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
