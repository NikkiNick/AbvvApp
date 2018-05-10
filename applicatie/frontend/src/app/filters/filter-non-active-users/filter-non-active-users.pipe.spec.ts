import { FilterNonActiveUsersPipe } from './filter-non-active-users.pipe';

describe('FilterNonActiveUsersPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterNonActiveUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
