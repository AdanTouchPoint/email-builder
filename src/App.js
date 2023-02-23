import React, { useState } from 'react'
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import SmokerSubmission from "./components/SmokerSubmission";
import NoSmokerSubmission from "./components/NoSmokerSubmission";
import AnswersView from "./components/AnswersView";
import AnswersViewSmoker from "./components/AnswersViewSmoker";
import ThankYou from "./components/ThankYou";
import Footer from './components/Footer'
import Questions from './components/Questions';
import QuestionsView from './components/QuestionsView';
function App() {

    const [usertweet, setUsertweet] = useState({
        firstName: '',
        lastName: '',
        zipCode: '',
        email: ''
    })
    const [user, setUser] = useState({
        submissionType: '',
        firstName: '',
        lastName: '',
        age: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        id: '',
        smoker: ''
    });
    const [dataNoSmokerSub, setDataNoSmokerSub] = useState({
        prescriptionSupport: '',
        personalStory: '',
        id: '',
        userId: ''
    });
    const [dataSmokerSub, setDataSmokerSub] = useState({
        smokedYears: '',
        tries: '',
        money: '',
        prescriptionSupport: '',
        personalStory: '',
        words: '',
        id: '',
       userId: ''
    });
    const [allDataIn, setAllDataIn] = useState(
        []
    )
    const [products, setProducts] = useState({
        products: ''
    })
    const [questions, setQuestions] = useState([])
    const [hidden, setHidden] = useState(true)
    const [smokerSub, setSmokerSub] = useState(true)
    const [noSmokerSub, setNoSmokerSub] = useState(true)
    const [noSmokerAnswers, setNoSmokerAnswers] = useState(true)
    const [smokerAnswers, setSmokerAnswers] = useState(true)
    const [showThankYou, setShowThankYou] = useState(true)
    const [showQuestions,setShowQuestions] = useState(true)
    const [showQuestionsView,setShowQuestionsView] = useState(true)
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <header style={{background: '#e4eaf1'}}>

            </header>
            <div style={{background: '#6a7b8d', flex: '1'}}>
                <h1 style={{color: 'white'}}>
                    Email Builder
                </h1>
                <Home
                    user={user}
                    setUser={setUser}
                    hidden={hidden}
                    setHidden={setHidden}
                />
                <RegisterForm
                    hidden={hidden}
                    user={user}
                    setUser={setUser}
                    showQuestions={showQuestions}
                    setShowQuestions={setShowQuestions}
                    questions={questions}
                    setQuestions={setQuestions}
                />
                <SmokerSubmission
                    user={user}
                    smokerSub={smokerSub}
                    dataSmokerSub={dataSmokerSub}
                    setDataSmokerSub={setDataSmokerSub}
                    setSmokerAnswers={setSmokerAnswers}
                    setAllDataIn={setAllDataIn}
                    allDataIn={allDataIn}
                    products={products}
                    setProducts={setProducts}
                    
                />
                <NoSmokerSubmission
                    user={user}
                    noSmokerSub={noSmokerSub}
                    setDataNoSmokerSub={setDataNoSmokerSub}
                    dataNoSmokerSub={dataNoSmokerSub}
                    setNoSmokerAnswers={setNoSmokerAnswers}
                    setAllDataIn={setAllDataIn}
                    allDataIn={allDataIn}
                />
                <Questions 
                    user={user}
                    setUser={setUser}
                    showQuestions={showQuestions}
                    setShowQuestions={setShowQuestions}
                    questions={questions}
                    setQuestions={setQuestions}
                    setSmokerAnswers={setSmokerAnswers}
                    showQuestionsView={showQuestionsView}
                    setShowQuestionsView={setShowQuestionsView}
                />
                <QuestionsView
                setHidden={setHidden}
                user={user}
                    questions={questions}
                    setShowThankYou={setShowThankYou}
                    showQuestions={showQuestions}
                    setShowQuestions={setShowQuestions}
                    showQuestionsView={showQuestionsView}
                    setShowQuestionsView={setShowQuestionsView} 
                />
                <AnswersViewSmoker
                    user={user}
                    setDataSmokerSub={setDataSmokerSub}
                    dataSmokerSub={dataSmokerSub}
                    smokerAnswers={smokerAnswers}
                    setShowThankYou={setShowThankYou}
                    setSmokerSub={setSmokerSub}
                    setHidden={setHidden}
                    setSmokerAnswers={setSmokerAnswers}
                    setAllDataIn={setAllDataIn}
                    allDataIn={allDataIn}
                    questions={questions}
                    setQuestions={setQuestions}
                />
                <AnswersView
                    user={user}
                    dataNoSmokerSub={dataNoSmokerSub}
                    noSmokerAnswers={noSmokerAnswers}
                    setShowThankYou={setShowThankYou}
                    setNoSmokerSub={setNoSmokerSub}
                    setHidden={setHidden}
                    setNoSmokerAnswers={setNoSmokerAnswers}
                    setAllDataIn={setAllDataIn}
                    allDataIn={allDataIn}
                />
                <ThankYou
                    showThankYou={showThankYou}/>
            </div>
            <Footer/>

        </div>

    );
}

export default App;
