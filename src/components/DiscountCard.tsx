import { useState } from 'react';
import type { Discount } from '../data/types';
import { categoryLabel, eligibilityLabel } from '../data/discounts';

type Props = {
  discount: Discount;
  defaultOpen?: boolean;
};

export function DiscountCard({ discount, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const eligibility = eligibilityLabel(discount);

  return (
    <article className="discount-card">
      <header className="discount-card__head">
        <div className="discount-card__titles">
          <h3 className="discount-card__biz">{discount.business}</h3>
          <p className="discount-card__meta">
            <span className="chip chip--category">
              {categoryLabel(discount.category)}
            </span>
            {discount.scope === 'national' ? (
              <span className="chip chip--scope">National</span>
            ) : (
              <span className="chip chip--scope">Local</span>
            )}
          </p>
        </div>
        <p className="discount-card__age" aria-label={`Eligibility: ${eligibility}`}>
          <span className="discount-card__age-label">Starts at</span>
          <span className="discount-card__age-value">{eligibility}</span>
        </p>
      </header>

      <p className="discount-card__blurb">{discount.blurb}</p>

      {discount.dayRestriction && (
        <p className="discount-card__day">
          <strong>When:</strong> {discount.dayRestriction}
        </p>
      )}

      <button
        type="button"
        className="discount-card__toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Hide details' : 'Proof needed & tips'}
      </button>

      {open && (
        <div className="discount-card__details">
          <p>
            <strong>Proof needed:</strong> {discount.proofNeeded}
          </p>
          {discount.notes && (
            <p>
              <strong>Note:</strong> {discount.notes}
            </p>
          )}
          <p className="discount-card__callahead">
            Call ahead — franchise policies vary. Offers change; verify before
            you go.
          </p>
        </div>
      )}
    </article>
  );
}
