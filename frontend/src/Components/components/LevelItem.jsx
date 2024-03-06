export default function LevelItem({levelData, onLevelChoise}) {

    //dummy content
    const newLevelData = {
        ...levelData,
        title: "Poziom " + levelData.id,
    }

    return (
        <li onClick={() => onLevelChoise(newLevelData)}><p>{newLevelData.title}</p></li>
    );
}