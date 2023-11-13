import axios from "axios";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Select from 'react-select';
import { QuestionSuccess } from "./landingReducer";
import { questionsFetch } from "./action";


interface JobRole {
    value: string;
    label: string;
}

interface TechStack {
    value: string;
    label: string;
}

interface ProgrammingLanguage {
    value: string;
    label: string;
}

interface FetchParams {
    role: string | null;
    difficulty: string | null;
    user: string | null;
}
const jobRoles: JobRole[] = [
    { value: 'MERN', label: 'MERN Stack Developer' },
    { value: 'MEAN', label: 'MEAN Stack Developer' },
    { value: 'java', label: 'Java Backend Developer' },
    { value: 'javascript', label: 'Javascript Developer' },
    { value: 'data analyst', label: 'Data Analyst' },
];

const techStacks: TechStack[] = [
    { value: 'easy', label: '3.5 to 7' },
    { value: 'medium', label: '7 to 12' },
    { value: 'hard', label: 'above 12' },
];

// const programmingLanguages: ProgrammingLanguage[] = [
//     { value: 'javascript', label: 'JavaScript' },
//     { value: 'python', label: 'Python' },
//     { value: 'java', label: 'Java' },
//     { value: 'ruby', label: 'Ruby' },
//     { value: 'csharp', label: 'C#' },
//     { value: 'go', label: 'Go' },
// ];

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState<string>("");
    const [selectedJobRole, setSelectedJobRole] = useState<JobRole | null>(null);
    const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const { sessionID, questions } = useSelector((store: any) => {
        return {
            questions: store.landingReducer.questions,
            sessionID: store.landingReducer.sessionID,
        }
    }, shallowEqual)
    // const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage | null>(null);

    const handleJobRolesChange = (e: JobRole | null) => {
        setSelectedJobRole(e);
    };

    const handleTechStacksChange = (e: TechStack | null) => {
        setSelectedTechStacks(e);
    };

    // const handleLanguageChange = (e: ProgrammingLanguage | null) => {
    //     setSelectedLanguage(e);
    // };


    useEffect(() => {
     
        if (questions.length) {
            navigate("/main")
        }
    }, [questions])


    const sessionCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let data: FetchParams = {
            role: selectedJobRole?.value || null,
            difficulty: selectedTechStacks?.value || null,
            user: user,
        }

        dispatch(questionsFetch(data) as any)
    }


    return (
        <>
            <h1 className="text-3xl font-bold" >Welcome to the GenterViewer virtual interviewing platform</h1>
            <div className="flex flex-col gap-5" >
                <h2>Please Provide Information About Your Role</h2>
                <form onSubmit={sessionCreate} className="flex flex-col gap-5">
                    <div>
                        <label >UserName:</label>
                        <br />
                        <input onChange={(e) => { setuser(e.target.value) }} type="text" placeholder="type your name here" />
                    </div>
                    <div>
                        <label >Select Job Role:</label>
                        <Select
                            className="w-1/2 m-auto"
                            value={selectedJobRole}
                            onChange={handleJobRolesChange}
                            options={jobRoles}
                            placeholder="Select a job role"
                        />
                    </div>
                    <div>
                        <label >Select Expected Salary:</label>
                        <Select
                            className="w-1/2 m-auto"
                            value={selectedTechStacks}
                            onChange={handleTechStacksChange}
                            options={techStacks}
                            placeholder="Select Expected Salary"
                        />
                    </div>
                    {/* <div>
                        <label>Select Programming Language:</label>
                        <Select
                            className="w-1/2 m-auto"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            options={programmingLanguages}
                            placeholder="Select a programming language"
                        />
                    </div> */}
                    <button disabled={isLoading} className="border-2 w-1/4 m-auto p-3 rounded-lg hover:bg-green-500 hover:border-green-500 font-bold transition-all" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};
