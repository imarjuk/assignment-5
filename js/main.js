 document.getElementById('btn-1')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-1').disabled= true;
        document.getElementById('btn-1').classList.add('bg-gray-300');       
    }
        
 })
 document.getElementById('btn-2')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-2').disabled= true;
        document.getElementById('btn-2').classList.add('bg-gray-300');       
    }
        
 })

 document.getElementById('btn-3')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-3').disabled= true;
        document.getElementById('btn-3').classList.add('bg-gray-300');       
    }
        
 })

 document.getElementById('btn-4')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-4').disabled= true;
        document.getElementById('btn-4').classList.add('bg-gray-300');       
    }
        
 })

 document.getElementById('btn-5')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-5').disabled= true;
        document.getElementById('btn-5').classList.add('bg-gray-300');       
    }
        
 })

 document.getElementById('btn-6')
 .addEventListener('click', function(){
    const task = document.getElementById('assigned-task');
    const conTask = parseInt(task.innerText)-1;
    const completedTask = document.getElementById('total-task');
    const contCompletedTask = parseInt(completedTask.innerText) + 1 ;

    if (conTask >= 5 && contCompletedTask >= 23 ){
        alert('board Update Successfully');
        task.innerText = '0'+conTask;
        completedTask.innerText = contCompletedTask;
        document.getElementById('btn-6').disabled= true;
        document.getElementById('btn-6').classList.add('bg-gray-300');       
    }
        
 })








//  transfer window to  Question part

  document.getElementById('Discover-New')
   .addEventListener('click', function(){
    window.location.href = './blog.html';
   })

