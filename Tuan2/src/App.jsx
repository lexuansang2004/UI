import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bai1() {
  var [text, setText] = useState('default')

  function handleClick() {
    setText(text)
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <>
      <input onChange={handleChange} type="text" />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>{text}</span>
    </>
  )
}

function Bai2() {
  var [a, setA] = useState(0)
  var [b, setB] = useState(0)
  var [result, setResult] = useState(0)

  function handleChangeA(e) {
    setA(parseInt(e.target.value))
  }

  function handleChangeB(e) {
    setB(parseInt(e.target.value))
  }

  function handleClick() {
    setResult(a + b)
  }

  return (
    <>
      <input type="text" onChange={handleChangeA} placeholder="Nhập số A" />
      <br />
      <input type="text" onChange={handleChangeB} placeholder="Nhập số B" />
      <br />
      <button onClick={handleClick}>Tính cộng</button>
      <br />
      <span>Kết quả: {result}</span>
    </>
  )
}

function Bai3() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")

  const tinhToan = () => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Vui lòng nhập số hợp lệ")
      return
    }
    switch (operation) {
      case "+":
        setResult(numA + numB)
        break
      case "-":
        setResult(numA - numB)
        break
      case "*":
        setResult(numA * numB)
        break
      case "/":
        setResult(numA / numB)
        break
      default:
        setResult("Vui lòng chọn phép tính")
        break
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="text"
        placeholder="Nhập số a"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Nhập số b"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="+" /> <span>+</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="-" /> <span>-</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="*" /> <span>*</span>
      <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="/" /> <span>/</span>
      <br />
      <button onClick={tinhToan}>Tính toán</button>
      <br />
      <span>Kết quả: {result}</span>
    </div>
  )
}

function Bai4() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setMessage(`Tên: ${name}, Email: ${email}, Số điện thoại: ${phone}`)
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <button type="submit">Gửi thông tin</button>
      </form>
      <br />
      <span>{message}</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Bài 1</h1>
      <Bai1 />
      <h1>Bài 2</h1>
      <Bai2 />
      <h1>Bài 3</h1>
      <Bai3 />
      <h1>Bài 4</h1>
      <Bai4 />
    </div>
  )
}

export default App
