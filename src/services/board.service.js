import { BoardModel } from '*/models/board.model'

const createNew = async(data) => {
  try {
    const result = await BoardModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getFullBoard = async(boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId)
    // Add card to each column
    board.columns.forEach(column => {
      column.cards = board.cards.filter(c => c.columnId.toString() === column._id.toString())
    })
    //sort column by columnOrder, sort cards bt cards bt cardsOrder, this state will pass to frontend DEV
    // Remove card tag from boards
    delete board.cards
    return board
  } catch (error) {
    throw new Error(error)
  }
}

export const BoardService = { 
  createNew,
  getFullBoard
}