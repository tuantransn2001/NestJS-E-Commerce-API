type UUID = string;
type Base64UUID = string;

export function uuidToBase64(uuid: UUID): Base64UUID {
  return Buffer.from(uuid.replace(/-/g, ''), 'hex').toString('base64url');
}

export function base64toUUID(base64: Base64UUID): UUID {
  const hex = Buffer.from(base64, 'base64url').toString('hex');

  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(
    12,
    16,
  )}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}
