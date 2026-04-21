import AnswersList from "./components/answers/AnswersList"
import ListItem from "./components/answers/listItem"
import answers from "./lib/answers"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased p-5">
      <h1 className="text-3xl font-semibold tracking-4 mb-5 text-center uppercase">
        W1D1 - <span className="text-amber-200">Pratica</span>
      </h1>
      <main className="max-w-3xl mx-auto">
        <AnswersList>
          {answers.map((answer, index) => {
            return <ListItem key={index} answer={answer} />
          })}
        </AnswersList>
      </main>
    </div>
  )
}

export default App
