import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AccessoryPageContainer from 'containers/accessory/AccessoryPageContainer'

describe('AccessoryPageContainer', () => {
  // https://testing-library.com/docs/dom-testing-library/api-queries/#getby
  /*
        getBy 系列 function： 
        getBy 將會返回第一個 match 到的 DOM node，如果沒有找到 或是 如果找到超過一個 則會跳出 error
        getAllBy 系列 function：
            getAllBy 將會返回一個 array 裡面包涵全部 match 到的 DOM node，如果沒有找到則會跳出 error
        queryBy 系列 function：
            queryBy  將會返回第一個 match 到的 DOM node，如果沒有找到則會返回 null，如果找到超過一個則會跳出 error，適合用來判斷不存在的 node
        queryAllBy 系列 function：
            queryAllBy 將會返回一個 array 裡面包涵全部 match 到的 DOM node，如果沒有找到則會返回 空陣列[]
        findBy 系列 function：
            findBy 將會返回 promise 並且在找到 DOM node 後才會呼叫 resolves ，如果沒有找到 或是 如果找到超過一個 或 timeout(default 1000ms) 則會呼叫 rejected
        findAllBy 系列 function：
            findAllBy  將會返回 promise 並且在找到 DOM node 後才會呼叫 resolves 與 findBy不同的是返回的是 array 型別，如果沒有找到 或 timeout(default 1000ms) 則會呼叫 rejected
    */
  const { container, getByTestId, getAllByTestId } = render(<AccessoryPageContainer />)
  test(' render all the jewelry Item ', () => {
    let listWrppaer = getByTestId('listWrapper')
    let jewelryItems = getAllByTestId('jewelryItem')
    screen.debug(jewelryItems)
    console.log('jewelryItems', jewelryItems.length)
  })
})
