import { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import StarRating from './StarRating';
import { type Review } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface ReviewsProps {
  productId: string;
  reviews: Review[];
}

export default function Reviews({ productId, reviews }: ReviewsProps) {
  const [showForm, setShowForm] = useState(false);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  // Calculate rating distribution
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(r => Math.floor(r.rating) === rating).length
  );
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
    : 0;

  const handleSubmitReview = () => {
    if (newRating === 0) {
      toast({ title: 'لطفا امتیاز خود را انتخاب کنید', variant: 'destructive' });
      return;
    }
    if (!newComment.trim()) {
      toast({ title: 'لطفا نظر خود را بنویسید', variant: 'destructive' });
      return;
    }
    // TODO: Submit review to backend
    toast({ title: 'نظر شما با موفقیت ثبت شد' });
    setShowForm(false);
    setNewRating(0);
    setNewComment('');
  };

  const handleHelpful = (reviewId: string, helpful: boolean) => {
    // TODO: Submit helpful vote to backend
    console.log('Helpful vote:', reviewId, helpful);
    toast({ title: helpful ? 'ممنون از نظر شما' : 'نظر شما ثبت شد' });
  };

  return (
    <div className="space-y-6">
      {/* Rating summary */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Average rating */}
          <div className="text-center md:text-right">
            <div className="text-5xl font-bold text-primary mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={averageRating} size="lg" />
            <p className="text-sm text-muted-foreground mt-2">
              از {new Intl.NumberFormat('fa-IR').format(totalReviews)} نظر
            </p>
          </div>

          {/* Rating distribution */}
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm w-4">{new Intl.NumberFormat('fa-IR').format(rating)}</span>
                <StarRating rating={rating} size="sm" />
                <Progress
                  value={totalReviews > 0 ? (ratingCounts[index] / totalReviews) * 100 : 0}
                  className="flex-1 h-2"
                />
                <span className="text-xs text-muted-foreground w-8">
                  {new Intl.NumberFormat('fa-IR').format(ratingCounts[index])}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Add review button/form */}
      {!showForm ? (
        <Button onClick={() => setShowForm(true)} data-testid="write-review-btn">
          نوشتن نظر
        </Button>
      ) : (
        <Card className="p-6">
          <h3 className="font-bold mb-4">نظر خود را بنویسید</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">امتیاز شما</label>
              <StarRating
                rating={newRating}
                size="lg"
                interactive
                onChange={setNewRating}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">نظر شما</label>
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="نظر خود را درباره این محصول بنویسید..."
                rows={4}
                data-testid="review-textarea"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSubmitReview} data-testid="submit-review">
                ثبت نظر
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                انصراف
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-4" data-testid={`review-${review.id}`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{review.userName}</span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle className="w-3 h-3" />
                      خریدار
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <StarRating rating={review.rating} size="sm" />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-muted-foreground">آیا این نظر مفید بود؟</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleHelpful(review.id, true)}
                className="text-xs"
              >
                <ThumbsUp className="w-3 h-3 ml-1" />
                بله ({new Intl.NumberFormat('fa-IR').format(review.helpful)})
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleHelpful(review.id, false)}
                className="text-xs"
              >
                <ThumbsDown className="w-3 h-3 ml-1" />
                خیر
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
