#!/bin/bash
# Download pool images from Airbnb listing
cd "$(dirname "$0")/../public/images/pool"

IDS=(
  "c55910d7-047c-4105-ad37-06f2af27492f"
  "0bf641d5-1dae-4267-b224-82cfe39ce88f"
  "7f66ac19-74cc-4675-83ba-aa0770961e53"
  "b01f36fc-7250-4df0-8ea7-95735253ea68"
  "6a9a79cd-39af-4b8e-a560-f992daad044f"
  "f1535673-a34b-46b1-8faf-b29c029f8a85"
  "61c4f730-6297-4332-88bb-6d58a8baada1"
  "9be39dc5-323c-4e09-899c-cb055992572e"
  "b70b0ddb-106f-4080-94d1-1fa77534e5df"
  "cdc7fc5b-5e72-4ef3-ac41-78e1452bd75a"
  "61f4816f-db1f-4eaf-885f-05b9ba0c0b94"
  "5b9b4c7a-8b3c-4a30-9d88-de35bb1ad27c"
  "5a5bd6cf-eec4-4a2f-8f34-113e6765a462"
  "675ebe14-9f7e-4641-8e20-911df1f6581e"
  "0cefd3b0-bd42-48c4-a87d-b4605a382962"
  "e65f9bb0-bfae-4a8a-b7c3-276eb2afaaff"
  "5c823769-7114-436d-a3ed-86e100a75d70"
  "9d7d761d-fe92-490e-ae5c-a615d10d6b3c"
  "57e4e7ba-48f3-41c3-9673-b7b4eaed36f7"
  "205f123b-7e76-44a1-ba02-65b8b3d2ba42"
)

for i in "${!IDS[@]}"; do
  n=$((i + 1))
  fname=$(printf "%03d_Pool_%d.jpeg" $n $n)
  url="https://a0.muscache.com/im/pictures/hosting/Hosting-1345960842338220775/original/${IDS[$i]}.jpeg"
  if curl -sL -o "$fname" "$url"; then
    echo "Downloaded $fname"
  else
    echo "Failed $fname"
  fi
done
