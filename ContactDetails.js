import React,{useState} from 'react';
import Firebase from '../config/Firebase';
import 'firebase/database'

function ContactDetails() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [room, setRoom] = useState('');
    const [detail, setDetail] = useState('');

  


    const contactDetail = () => {
        let alldetail = {
            name,
            email,
            phone,
            city,
            room,
            detail
        }
        Firebase.database().ref('/').child('usersDetails').push(alldetail);
        alert('You have succesfully Submit the Data..')
    
    }





    return (
        <div>
          <div className="login">
     

        
  
     <div className='login_container'>
         <h3>Submit All Details</h3>
         <hr />

         <form>
            
             <label for="exampleFormControlInput1" class="form-label">Your Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />

            <label for="exampleFormControlInput1" class="form-label">Your Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            
            <label for="exampleFormControlInput1" class="form-label">Your Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone" />

            <label for="exampleFormControlInput1" class="form-label">Your City</label>
            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your City" />

            <label for="exampleFormControlInput1" class="form-label">Room Detail</label>
            <input onChange={(e) => setRoom(e.target.value)} value={room} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Room Detail" />

            <label for="exampleFormControlInput1" class="form-label">Question</label>
            <input onChange={(e) => setDetail(e.target.value)} value={detail} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Question" />

          
                         <button onClick={contactDetail} class="btn btn-primary" type="button">Submit Data</button>

                         {/* <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" /> */}


           
          
         </form>
         
     </div>
   </div>
            
        </div>
    )
}

export default ContactDetails;
