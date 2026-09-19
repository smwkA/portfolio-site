import { arrayWorkLink, arrayWorkDetail, arrayLabel, arryaTag } from './data.js'

const params = new URLSearchParams(location.search)
const paramsId = Number(params.get('id'))

const currentIndex = arrayWorkDetail.findIndex((work) => work.id === paramsId)

document.getElementById('left-btn').addEventListener('click', function () {
  let prevIndex = currentIndex - 1

  if (prevIndex < 0) {
    prevIndex = arrayWorkDetail.length - 1
  }

  const prevId = arrayWorkDetail[prevIndex].id

  const url = new URL(window.location.href)
  // クエリパラメータを変更
  url.searchParams.set('id', prevId)
  // URLを更新してリロード
  window.location.href = url.toString()
})

document.getElementById('right-btn').addEventListener('click', function () {
  let nextIndex = currentIndex + 1

  if (nextIndex >= arrayWorkDetail.length) {
    nextIndex = 0
  }

  const nextId = arrayWorkDetail[nextIndex].id

  const url = new URL(window.location.href)
  // クエリパラメータを変更
  url.searchParams.set('id', nextId)
  // URLを更新してリロード
  window.location.href = url.toString()
})
