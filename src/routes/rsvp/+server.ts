import { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from '$env/static/private';
import { Redis } from '@upstash/redis';
import { json } from '@sveltejs/kit';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

export async function GET() {
	const attendees = {};
	const keys = await redis.keys('');
	for (const key of keys) {
		attendees[key] = await redis.get(key);
	}
	return json(attendees);
}
