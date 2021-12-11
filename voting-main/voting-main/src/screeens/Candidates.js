import React,{useEffect,useState} from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'
import { useSelector ,useDispatch} from 'react-redux'
import Candidate from '../components/Candidates/Candidate'
import { addMyVote } from '../redux/actions/user'
const Candidates = (props) => {
    const state = useSelector(state => state)
    const [candidates, setCandidates] = useState([])
    console.log("\n\n\n\n\n\n\n\n", state.positions)
    const id = props.route.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        if(id){
            const candidates = state.positions.filter(position => position.id === id)[0].candidates;
            const approvedCandidates = candidates.filter(candidate => candidate.status === 'APPROVED');
            setCandidates(approvedCandidates)
        }
    }, [id])

    const vote= async(candidate)=>{
        try {
           await  addMyVote(candidate,id)(dispatch);
            Toast.show({
                type: 'success',
                text1: 'OK!',
                text2: "Your vote was recorded"}
            )
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error,
                text2: 'error'}
            )
            console.log(error)
        }
    }
    return (
        <ScrollView>
            {candidates.map(candidate => <Candidate vote={vote} key={candidate.id} candidate={candidate} />)}
        </ScrollView>
    )
}
export default Candidates
