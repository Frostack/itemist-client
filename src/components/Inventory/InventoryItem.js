import React from 'react';

function InventoryItem({ data }) {
  return (
    <div>
      <img src={data.icon_url} alt={data.name} />
      <h4>{data.name}</h4>
      <p>type: {data.type}</p>
      <p>tradable: {data.tradable}</p>
      <p>marketable: {data.marketable}</p>
      <p>
        description:{' '}
        {data.description.map(desc => (
          <p>{desc.value}</p>
        ))}
      </p>
      <p>
        tags:{' '}
        {data.tags.map(tag => (
          <p style={{ color: `#${tag.color}` }}>
            {tag.category}: {tag.name}
          </p>
        ))}
      </p>
    </div>
  );
}

export default InventoryItem;
