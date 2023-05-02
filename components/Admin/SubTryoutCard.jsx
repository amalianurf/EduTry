import Button from "../Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const SubTryoutCard = ({ judul, waktu, soal }) => {
    return (
        <div className="border-2 border-blue-dark rounded-md px-5 py-2 flex items-center justify-between gap-24">
            <div>
                <h3>{judul}</h3>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <TextSnippetOutlinedIcon />
                        <span>{soal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <AccessTimeOutlinedIcon />
                        <span>{waktu}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button className="px-2 bg-yellow-400">
                    <EditIcon />
                </Button>
                <Button className="px-2 bg-red">
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    );
}
 
export default SubTryoutCard;