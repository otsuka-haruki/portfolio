import { useState } from "react";
import InputCard from "./InputCard"
import ExistingCareerLists from "./ExistingCareerLists";

const CareerEditHome = (props) => {
    const { careerData } = props;
    const [editTargetId, setEditTargetId] = useState('');

    return (
        <>
            <InputCard careerData={careerData} editTargetId={editTargetId} />
            <ExistingCareerLists careerData={careerData} setEditTargetId={setEditTargetId} />
        </>
    )
}

export default CareerEditHome