import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Select from 'react-select';

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

const jobRoles: JobRole[] = [
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'backend', label: 'Backend Developer' },
    { value: 'fullstack', label: 'Full Stack Developer' },
    { value: 'mobile', label: 'Mobile App Developer' },
    { value: 'devops', label: 'DevOps Engineer' },
    { value: 'uiux', label: 'UI/UX Designer' },
];

const techStacks: TechStack[] = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'django', label: 'Django' },
    { value: 'spring', label: 'Spring Boot' },
];

const programmingLanguages: ProgrammingLanguage[] = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'csharp', label: 'C#' },
    { value: 'go', label: 'Go' },
];

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedJobRole, setSelectedJobRole] = useState<JobRole | null>(null);
    const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage | null>(null);

    const handleJobRolesChange = (e: JobRole | null) => {
        setSelectedJobRole(e);
    };

    const handleTechStacksChange = (e: TechStack[] | null) => {
        setSelectedTechStacks(e || []);
    };

    const handleLanguageChange = (e: ProgrammingLanguage | null) => {
        setSelectedLanguage(e);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        navigate("/main");
    };

    return (
        <>
            <h1 className="text-3xl font-bold" >Welcome to the GenterViewer virtual interviewing platform</h1>
            <div className="flex flex-col gap-5" >
                <h2>Please Provide Information About Your Role</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                        <label>Select Tech Stacks:</label>
                        <Select
                            className="w-1/2 m-auto"
                            value={selectedTechStacks}
                            // onChange={handleTechStacksChange}
                            options={techStacks}
                            isMulti
                            placeholder="Select tech stacks"
                        />
                    </div>
                    <div>
                        <label>Select Programming Language:</label>
                        <Select
                            className="w-1/2 m-auto"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            options={programmingLanguages}
                            placeholder="Select a programming language"
                        />
                    </div>
                    <button className="border-2 w-1/4 m-auto p-3 rounded-lg hover:bg-green-500 hover:border-green-500 font-bold transition-all" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};
