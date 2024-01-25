import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [query, setQuesry] = useState("")
  const filteredList = filterList(foods,query)

  function filterList(items,query ){
    query = query.toLowerCase()
    // return items.filter(item=>item === query.toLowerCase())
    console.log(query.split("   ")) //['vccty']
    return items.filter(item =>
      item.name.split(' ').some(word =>
          word.toLowerCase().startsWith(query)))
  }
  return (
    <>
      <b> <u> Example 1 </u></b>
      <div>Synced Inputs</div>
      <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} /><br />
      <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      <br />
      <br />
      <hr />
      <b>Example 2 </b> <br />
      Search : <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuesry(e.target.value) 
        }}
      />
      <hr />
      <table></table>
      <FilteredList filterList={filteredList} />
    </>
  )
}
const FilteredList = ({filterList}) => {
  return (
      <>
          {
            filterList.map(
                  item =>
                      <tr key={item.id}>
                          <td>{item.name}</td><td>{item.description}</td>
                      </tr>
              )
          }
      </>
  )
}

const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];


export default App

// important notes 
// 1.
// why this line - console.log(query.split("   ")) //['vccty'] -  is printing  this , on typing  vccty , while i applied split onto this and query is a string ?
// The `split()` method in JavaScript is used to split a string into an array of substrings based on a specified separator. In your case, you're using `"   "` (three spaces) as the separator. 
// When you type "vccty" into the input field, the `split()` method is called with `"   "` as the separator. However, "vccty" does not contain three spaces, so the `split()` method cannot find a place to split the string. As a result, it returns the entire string "vccty" as a single-element array.
// If you want to split the string into individual characters, you can use `""` (an empty string) as the separator:

// ```javascript
// console.log(query.split("")) // ['v', 'c', 'c', 't', 'y']
// ```
// If you want to split the string into words, you can use `" "` (a single space) as the separator:
// ```javascript
// console.log(query.split(" ")) // ['vccty']
// ```
// In these examples, the `split()` method can find places to split the string, so it returns an array of substrings. If there's still an issue, please let me know! 😊


// oh so one tab is equal to two spaces ?
// In many text editors and environments, a tab is often displayed as equivalent to 2 spaces or 4 spaces for readability. However, it's important to note that a tab (`\t`) is actually a different character from a space (` `) in terms of ASCII values. The exact display width of a tab can be configured in many text editors. If there's still an issue, please let me know! 😊