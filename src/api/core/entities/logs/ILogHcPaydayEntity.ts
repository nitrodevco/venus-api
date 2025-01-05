export interface ILogHcPaydayEntity
{
    id: number;
    timestamp: number;
    userId: number;
    hcStreak: number;
    totalCoinsSpent: number;
    rewardCoinsSpent: number;
    rewardStreak: number;
    totalPayout: number;
    currency: string;
    claimed: boolean;
}
