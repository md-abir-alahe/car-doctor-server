/* 
--------------------
JWT: secure your api
--------------------
        CREATE TOKEN        
--------------------
1. after user login send user basic info to create token 
2. in the server side: install npm i jsonwebtoken
3. import jsonwebtoken
4. jwt.sign(payload, secret, {expires})
5. return token to the client side
 

6. after receiving the token store it either http only cookies or local storage

7. use a general space onAuthStateChange > AuthProvider
-------------------------
        SEND TOKEN TO SERVER
---------------------------
1. for sensitive api call () send authorization headers { authorization : 'Bearer '}

----------------------------
        VERIFY TOKEN
---------------------------
1. create a function called verify (middleware)
2. this function will have three params : req, res, next
3. First check whether the authorization headers exists
4. if not send 401


*/