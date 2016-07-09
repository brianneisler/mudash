import { get } from '../core';
export default function property(path) {
  return (data) => {
    return get(data, path);
  };
}
