from PIL import Image
import sys

def remove_white_bg(input_path, output_path, threshold=240):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if pixel is white-ish
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((255, 255, 255, 0)) # Make it transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved transparent image to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
    else:
        input_file = r"c:\Users\jeeva\OneDrive\Desktop\New folder\portfolio\public\hero-kody-blend.png"
        output_file = r"c:\Users\jeeva\OneDrive\Desktop\New folder\portfolio\public\hero-kody-transparent.png"
    
    remove_white_bg(input_file, output_file)
