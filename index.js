// Your code here

const dodger = document.getElementById('dodger')

//move dodger left

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft'){
    moveDodgerLeft()
  }
})

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)

  if (left > 0){
    dodger.style.left = `${left-1}px`
  }
}

//move dodger right

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowRight'){
    moveDodgerRight()
  }
})

function moveDodgerRight(){
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)

  if (left < 360){
    dodger.style.left = `${left+1}px`
  }
}