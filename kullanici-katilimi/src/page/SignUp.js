
import SignUpForm from "../components/SignUpForm"

function SignUp(props) {
    const {memberToBeEdited, hEditMember, teamList, hTeamList} = props;
    return (
        <SignUpForm memberToBeEdited={memberToBeEdited} hEditMember={hEditMember} teamList={teamList} hTeamList={hTeamList}/>
    )
}

export default SignUp;

