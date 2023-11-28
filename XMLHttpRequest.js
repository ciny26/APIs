//XMLHttpRequest
//Get method
 let req = new XMLHttpRequest()
req.open('GET' , 'https://reqres.in/api/users', true)
req.addEventListener('load' , function(){
    if(this.status ===200 && this.readyState === 4){   //the status is 200
         
        const res = JSON.parse(this.responseText)
        const data = res.data
        console.log(data)
    }
    else{
        throw new Error(`Bad request : '${this.status} , the state is : ${this.readyState}'`);
    }
})
req.send() 



 //POST method
const newUser = {
    name : 'Yassine',
    job : 'Teacher',
    age : 26
}
let postReq = new XMLHttpRequest()
postReq.open('POST' , 'https://reqres.in/api/users' , true)
postReq.setRequestHeader('content-type' , 'application/json')//header is used too 
                                                            //1st param know the kind of data we are sending(like a label)
                                                            //2nd param the actual data like in here the data type 
postReq.addEventListener('load' , function(){
    if(this.status === 201 && this.readyState === 4){       //the status is 201
        const res = JSON.parse(this.responseText)
        console.log(res)
    }
    else{
        console.error(this.status)
    }
})

postReq.send(JSON.stringify(newUser))
console.log('Done') 


//PUT method to modify an existing data
//PUT method
const anotherNewUser = {
    name : 'Yassine',
    job : 'Teacher',
    age : 27
}
let putReq = new XMLHttpRequest()
putReq.open('PUT' , 'https://reqres.in/api/users/2', true)//you need to precise which user you want to modify
putReq.setRequestHeader('content-type' , 'application/json')//header is used to 
                                                            //1st param know the kind of data we are sending(like a label)
                                                            //2nd param the actual data like in here the data type 
putReq.addEventListener('load' , function(){
    if(this.status === 200 && this.readyState === 4){       //status is 200 in this case
        const res = JSON.parse(this.responseText)
        console.log(res)
    }
    else{
        console.error(this.status)
    }
})

putReq.send(JSON.stringify(anotherNewUser))
console.log('Done') 

//DELETE method is deleting users from DB
//DELETE
//You don't need to create an user object here 
let delReq = new XMLHttpRequest()
delReq.open('Delete' , 'https://reqres.in/api/users/2', true)//you need to precise which user you want to delete (2)
                                                             //No header is used (because no data will be sent)
delReq.addEventListener('load' , function(){
    if(this.status === 204 && this.readyState === 4){       //status is 204 in this case
        
        console.log('Succesful request')                    //No data will be returned because we didn't send anything
    }
    else{
        console.error(this.status + 'Bad request')
    }
})

delReq.send()
console.log('Done')