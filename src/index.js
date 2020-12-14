const isUndefined = (value) => value === undefined;

const isArray = (data) => Array.isArray(data);

const isObject = (data) =>
  Object.prototype.toString.call(data) === "[object Object]";

function serialize(key, value, formData, options) {
  if (isObject(value)) {
    Object.entries(value).map(([nestedKey, nestedValue]) => {
      if (options.useBracketsForObjects) {
        serialize(`${key}[${nestedKey}]`, nestedValue, formData, options);
      } else {
        serialize(`${key}.${nestedKey}`, nestedValue, formData, options);
      }
    });
  } else if (isArray(value)) {
    value.map((singleValue, index) => {
      serialize(`${key}[${index}]`, singleValue, formData, options);
    });
  } else {
    if (options.removeNullAndUndefined) {
      if (value) {
        formData.append(key, value);
      }
    } else {
      formData.append(key, value);
    }
  }
}

const toFormData = (data, options) => {
  const fo = options ? options : {};

  fo.removeNullAndUndefined = isUndefined(fo.removeNullAndUndefined)
    ? false
    : fo.removeNullAndUndefined;

  fo.useBracketsForObjects = isUndefined(fo.useBracketsForObjects)
    ? false
    : fo.useBracketsForObjects;

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    serialize(key, value, formData, fo);
  });

  return formData;
};

module.exports = { toFormData };
