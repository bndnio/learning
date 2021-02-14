/**
 * This week’s question:
 * You are given a snapshot of a queue of stocks that have changing prices coming in from a stream. Remove the outdated stocks from the queue.
 * 
 * Example:
 * 
 * $ snapshot = [
 *     { sym: ‘GME’, cost: 280 },
 *     { sym: ‘PYPL’, cost: 234 },
 *     { sym: ‘AMZN’, cost: 3206 },
 *     { sym: ‘AMZN’, cost: 3213 },
 *     { sym: ‘GME’, cost: 325 }
 *   ]
 * $ stockQueue(snapshot)
 * $ [{ sym: ‘PYPL’, cost: 234 },
 *    { sym: ‘AMZN’, cost: 3213 },
 *    { sym: ‘GME’, cost: 325 }]
 */

function stockQueue(snapshot) {
    const reverseSnapshot = snapshot.reverse()
    const seen = new Set()
  
    const filtered = reverseSnapshot
      .filter((stock) => {
        if (seen.has(stock.sym))
          return false
        seen.add(stock.sym)
        return true
      })
      
    return filtered.reverse()
  }
  
  function testSolution() {
    const snapshot = [
      { sym: "GME", cost: 280 },
      { sym: "PYPL", cost: 234 },
      { sym: "AMZN", cost: 3206 },
      { sym: "AMZN", cost: 3213 },
      { sym: "GME", cost: 325 }
    ]
    console.log(stockQueue(snapshot))
  
    const expected = [
      { sym: "PYPL", cost: 234 },
      { sym: "AMZN", cost: 3213 },
      { sym: "GME", cost: 325 }
    ]
    console.log(expected)
  }
  
  testSolution()
  