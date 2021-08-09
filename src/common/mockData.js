const friends = [
  { name: '해리포터', age: 14 },
  { name: '헤르미온느', age: 14 },
  { name: '론', age: 14 },
  { name: '스네이프', age: 37 },
  { name: '덤블도어', age: 50 },
];

const timelines = [
  { desc: '윙가디움레비오사', likes: 10 },
  { desc: '익스팩토패트로놈', likes: 20 },
  { desc: '임페리오', likes: 0 },
  { desc: '루모스', likes: 13 },
  { desc: '프로테고 막시마', likes: 40 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
