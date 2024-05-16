export const ListPart = ({ total, path, setState }) => {
  const list = [];

  for (let i = 1; i <= total; i++) {
    list.push(
      <div key={path + i} onClick={() => setState(`${path}/${i}.png`)}>
        <img
          src={`/images/character/${path}/${i}.png`}
          alt="img"
          width="60px"
          height="60px"
        />
      </div>
    );
  }

  return <div className="list-part">{list}</div>;
};
