import React from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import {writePost, changeTitle, changeBody} from "../../actions";
import Navigation from "../../components/navigation";


const Form = styled.form`
    display : flex;
    flex-direction : column;
    height : 600px;
    justify-content : space-arround;
    align-items: center;
    max-width : 1000px;
`;

const Input = styled.input`
    margin : 20px;
    width : 80%;
`;
const Button = styled.button`
    margin : 20px;
    font-size: 25px;
    height : 40px;
    width : 200px;
    max-width : 300px;
`;
const Textarea = styled.textarea`
    margin : 20px;
    width : 80%;
`;

const H1 = styled.h1`
margin: 0 auto;
text-align : center;
`;

const NewPostPage: React.FC = () => {
    var status = useSelector(state => state.create.status);
    var title = useSelector(state => state.create.title);
    var body = useSelector(state => state.create.body);
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(title, body);
        if(title.length>0 && body.length>0){
            dispatch(writePost(title, body));    
        }else{ 
            console.log("Empty values");
        }
    };  

    return(
        <div>
            <Navigation/>
            <H1> New Post page </H1>
            {status !== "Resolved" ||  status !=="" ? <h2>Loading...</h2> : <></>}
            <Form onSubmit={handleSubmit}>
                <Input type="text" 
                    value={title} 
                    onChange={()=> 
                            dispatch(changeTitle(event.target.value))
                        } 
                    placeholder="title"
                />
                <Textarea 
                    value={body} 
                    onChange={()=> dispatch(changeBody(event.target.value))} 
                    placeholder="Body"
                />
                <Button type="submit">Create</Button>
            </Form>
        </div>
    );
}; 

export default NewPostPage;