import { memo, useCallback } from 'react';
import { Button } from '@components/common/button';
import './card.css';

export type CardProp = {
  title: string;
  author: string;
  price: number;
  desc: string;
  image: string;
  id: number;
  onDelete: (id: number) => void;
  onEdit: () => void;
};

const Card = (props: CardProp): JSX.Element => {
  const { title, author, price, desc, image, id, onDelete, onEdit } = props;

  const handleDelete = useCallback((): void => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={`image ${title}`} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <span className="card-author">{author}</span>
        <span className="card-price" data-testid="price">
          Price: {price} USD
        </span>
        <p className="card-desc">{desc}</p>
        <div className="button-group">
          <Button
            data-testid="btnEdit"
            handleClick={onEdit}
            color="btn-secondary"
            typeButton="button"
            size="btn-small"
          >
            Edit
          </Button>
          <Button
            handleClick={handleDelete}
            color="btn-warning"
            typeButton="button"
            size="btn-small"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
