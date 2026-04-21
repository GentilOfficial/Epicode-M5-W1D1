const ListItem = ({ answer }) => {
  return (
    <li className="text-slate-400 rounded-2xl border border-slate-700 bg-slate-800 shadow-md shadow-slate-800 p-3.5">
      <span className="text-slate-100">{answer.title}</span>
      <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
        {answer.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p className="mt-2 text-amber-200">{answer.response}</p>
    </li>
  )
}

export default ListItem
